<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['user_name'];
    $email = $_POST['user_email'];
    $message = $_POST['message'];

    // إعداد البريد الإلكتروني
    $to = "phy.mousa@gmail.com";
    $subject = "رسالة من الموقع";
    $body = "الاسم: $name\nالبريد الإلكتروني: $email\n\nالرسالة:\n$message";
    $headers = "From: $email";

    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $body, $headers)) {
        echo "تم إرسال الرسالة بنجاح!";
    } else {
        echo "فشل في إرسال الرسالة.";
    }
}
?>
