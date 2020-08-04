<?php
include './dbh.php';


$motherTounge = mysqli_real_escape_string($conn, $_POST['motherTounge']);
$motherToungueLanguage = mysqli_real_escape_string($conn, $_POST['motherToungueLanguage']);
$stt = mysqli_real_escape_string($conn, $_POST['stt']);
$isAicteApproved = mysqli_real_escape_string($conn, $_POST['isAicteApproved']);
$institute = mysqli_real_escape_string($conn, $_POST['institute']);
$cleansing = mysqli_real_escape_string($conn, $_POST['cleansing']);
session_start();
$email = $_SESSION['email'];
$sql = "UPDATE users SET mother_tounge = '$motherTounge', mother_tounge_lang = '$motherToungueLanguage', institute_state = '$stt', aicte_approved = '$isAicteApproved', institute_name = '$institute', cleansing = '$cleansing', validator = 'NIL', year_experience = 'NIL', domain = 'NIL' WHERE email = '$email';";
mysqli_query($conn, $sql);
header("Location: http://localhost:3000/app?usere=".$email);