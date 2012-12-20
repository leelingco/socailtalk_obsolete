<?php

class Viewer_model extends CI_Model {
    
    var $sessionName;
    
    function __construct()
    {
        parent::__construct();
    }
    
    public function join($opentokID, $handle) 
    { 
      
      // Check for maximum connections
      $maxParticipants = 50;
      $maxSessionCount = 10;
      
      $sql = "SELECT id FROM  `viewer` WHERE sessionID = ( SELECT ID FROM `session` WHERE  `opentokID` =  ? )";
      $query = $this->db->query($sql, array($opentokID));
      $results = $query->result_array();
      $count = count($results);
      
      log_message("debug", "Found ".$count." viewers in the session ".$opentokID);
      
      if ($count < $maxParticipants) {
        // If session doesn"t exist, create one.
        $this->db->where("opentokID", $opentokID);
        $this->db->from("session");
        $query = $this->db->get();
        if (count($query->result_array()) == 0) {
          log_message("debug", "No session was found for opentokID: ".$opentokID);
          
          do {
            $name = rand(1, $maxSessionCount);         
            $data = array(
               "opentokID" => $opentokID ,
               "name" => $name
            );
            
            log_message("debug", "Attempting assignment of session number: ".$name);
            $this->db->insert("session", $data);
          }
          while ($this->db->_error_number() == 1062);
          
          $this->sessionName = (string)$name;
          log_message("debug", "Successfully assigned session number: ".$name);
          
          if ($this->db->_error_number() != 0) {
            throw new Exception ($this->db->_error_message());
          }
        }
        else {
          $sessionResult = $query->result_array();
          foreach ($sessionResult as $row) {
            $this->sessionName = $row["name"];
          }
          
        }
                
        // Complex subquery -- can't use ActiveRecord
        $sql = "INSERT INTO `viewer` (`id` ,`handle` ,`sessionID`)VALUES (NULL ,  ?,  (SELECT ID FROM `session` WHERE `opentokID` = ?))";
        $this->db->query($sql, array($handle, $opentokID));
        
        log_message("debug", "Inserting viewer ".$handle." into session ".$opentokID);
         // Deal with error state.
        if ($this->db->_error_number() == 1048) {
          throw new Exception ("Session does not exist with opentokID ".$opentokID);
        }
        else if ($this->db->_error_number() != 0) {
          throw new Exception ($this->db->_error_message());
        }
      }
      else {
        throw new Exception ("Maximum number of viewer reached for session.");
      }
    }
    
    public function leave($opentokID, $handle)
    {
      $sql = "DELETE FROM `viewer` WHERE `handle` = ? LIMIT 1";
      $this->db->query($sql, array($handle));
      
      log_message("debug", "Deleting ".$this->db->affected_rows()." viewers.");
      
      // Deal with error state.
      if ($this->db->_error_number() != 0) {
        throw new Exception ($this->db->_error_message());
      }
      else if ($this->db->affected_rows() < 1) {
        throw new Exception ("No viewer found with handle ".$handle.".  Are you sure this session (".$opentokID.") exists?");
      }
      
      // Drop the session if last one out.  Only do this if you actually delete a row
      if ($this->db->affected_rows() > 0) {
        $this->db->select("id");
        $this->db->where("opentokID", $opentokID);
        $query = $this->db->get("session");
        $row = $query->row();
        $id = $row->id;
        
        log_message("debug", "Found id ".$id." for opentokID ".$opentokID);
        
        
        $sql = "DELETE FROM `session` WHERE `session`.`id` = ".$id." AND (SELECT count(`id`) from `viewer` WHERE `sessionID` = ".$id.") < 1";
        $query = $this->db->query($sql, array($id), array($id));
        
        // Deal with error state.
        if ($this->db->_error_number() != 0) {
          throw new Exception ($this->db->_error_message());
        }
      }
      else {
        throw new Exception ("No viewer found with handle ".$handle.".  Are you sure this session (".$opentokID.") exists?");  
      }    
    }
}

?>