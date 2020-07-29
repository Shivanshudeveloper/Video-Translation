<?php include './includes/header.inc.php' ?>
    

<section class="container w-50">
    <div class="card shadow bg-white rounded mt-5">
        <div class="card-body">
            <center>
                <img class="img img-fluid w-25" src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" alt="AICTE Logo" srcset="">
            </center>
            <h4 class="display-4 font-weight-bold text-center">
                Change Password
            </h4>
        <form action="./src/main.php" method="POST">
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">New Password</label>
                <input name="pwd2" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input name="pwd" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" name="changePasswordBtn" class="btn-lg btn-block btn-primary">Submit</button>
        </form>
        </div>
    </div>
</section>

<?php include './includes/footer.inc.php' ?>