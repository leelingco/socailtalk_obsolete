<?// Request parameters are oauth_token, consumer_key and usr_id.
include_once "oauth-php/library/OAuthStore.php";
include_once "oauth-php/library/OAuthRequester.php";

$consumer_key = 'pxAhOddHpARGQcqfyEu3Q';
$oauth_token = $_GET['oauth_token'];
$user_id = $_GET['usr_id'];
$user_id=1;

try
{
    OAuthRequester::requestAccessToken($consumer_key, $oauth_token, $user_id);
}
catch (OAuthException $e)
{
    echo $e;
}
?>
<script>
	window.opener.twitterConnectSuccess();
	setTimeout(function(){window.close();},500);
</script>