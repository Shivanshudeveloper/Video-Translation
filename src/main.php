<?php
include './dbh.php';

if (isset($_POST['loginBtn'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pwd = mysqli_real_escape_string($conn, $_POST['pwd']);

    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$pwd';";
    $result = mysqli_query($conn, $sql);
    $resultChk = mysqli_num_rows($result);
    if ($resultChk < 0) {
        header("Location: ./index.php?c=wrong");
    } else {
        session_start();
        if ($row = mysqli_fetch_assoc($result)) {
            if ($row['password'] == 'aicte@1234') {
                if ($row['i_am'] == 'Teacher') {
                    header("Location: ../change.php");
                    $_SESSION['email'] = $email;
                    $_SESSION['fullname'] = $row['fist_name']. ' ' .$row['last_name'];
                    $_SESSION['language'] = $row['translated_to'];
                    $_SESSION['iam'] = 'Teacher';
                } else {
                    header("Location: ../change.php");
                    $_SESSION['email'] = $email;
                    $_SESSION['fullname'] = $row['fist_name']. ' ' .$row['last_name'];
                    $_SESSION['language'] = $row['translated_to'];
                    $_SESSION['language'] = $row['translated_to'];
                    $_SESSION['iam'] = 'NoTeacher';
                }
            } else {
                if ($row['i_am'] == 'Teacher') {
                    $_SESSION['email'] = $email;
                    $_SESSION['fullname'] = $row['fist_name']. ' ' .$row['last_name'];
                    $_SESSION['language'] = $row['translated_to'];
                    $_SESSION['iam'] = 'Teacher';
                    header("Location: https://translation.aicte-india.org/app/?usere=".$email);
                } else {
                    header("Location: ../dashboard.php");
                    $_SESSION['email'] = $email;
                    $_SESSION['fullname'] = $row['fist_name']. ' ' .$row['last_name'];
                    $_SESSION['language'] = $row['translated_to'];
                    $_SESSION['iam'] = 'NoTeacher';
                    header("Location: https://translation.aicte-india.org/app/?usere=".$email);
                }
            }
        } else {
            header("Location: ../index.php?nouser=nouser");
        }
    }
}


if (isset($_POST['changePasswordBtn'])) {
    $newpwd = mysqli_real_escape_string($conn, $_POST['pwd2']);
    session_start();
    $email = $_SESSION['email'];
    $sql = "UPDATE users SET password = '$newpwd' WHERE email = '$email';";
    mysqli_query($conn, $sql);
    $teacherChk = $_SESSION['iam'];
    if ($teacherChk == 'Teacher') {
        header("Location: ../dashboard_faculty.php");
    } else {
        header("Location: ../dashboard.php");
    }
}