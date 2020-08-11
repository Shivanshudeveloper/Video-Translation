<?php include './includes/header.inc.php' ?>

<section class="m-5 mt-2">
    <a href="./index.php" class="btn btn-outline-danger float-right mt-4">
        Logout
    </a>

    <?php
    session_start();
    echo '
        <h4 class="display-4 font-weight-bold">
            Welcome '.$_SESSION['fullname'].'
        </h4>
        <h5 class="font-weight-bold">
            You have selected '.$_SESSION['language'].' Language For Translation
        </h5>
    ';    
    ?>
    
    
    

    <div class="card bg-white rounded mt-5 p-2">
        <table class="table table-borderless">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th width="20%" scope="row">Is <?php echo $_SESSION['language']; ?> Your Mother Tongue</th>
                <td>
                <form action="./src/facultydashboard_update.php" name="yourForm" id="theForm2" method="post">    
                    <select id="motherTounge" name="motherTounge" class="form-select" aria-label="Default select example">
                        <option selected>-- SELECT YOUR OPTION --</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </td>
            </tr>
            <tr id="chooseMotherTounge" style="display:none;">
                <th width="20%" scope="row">Choose Your Mother Toungue</th>
                <td>
                    <select name="motherToungueLanguage" class="form-select" aria-label="Default select example">
                        <option value="No" selected>-- SELECT YOUR OPTION --</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Other">Other</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <hr />
                </td>
            </tr>
            <tr>
                <th width="20%" scope="row">Display Name</th>
                <td>
                    <?php
                        echo '
                            <input name="fullName" type="text" value="'.$_SESSION['fullname'].'" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        ';
                    ?>
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <div class="alert alert-primary" role="alert">
                        <strong>Help!</strong>
                         The display name will be printed on the pages translated by you.
                    </div>
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <hr />
                </td>
            </tr>
            <tr>
                <th width="20%" scope="row">State of Institute</th>
                <td>
                    <select onchange="print_city('state', this.selectedIndex);" id="sts" name ="stt" class="form-select"></select>
                    <select hidden id ="state" class="form-select" required></select>
                </td>
            </tr>
            <tr>
                <th width="20%" scope="row">Is your Institute AICTE Approved</th>
                <td>
                    <select name="isAicteApproved" id="isAicteApproved" class="form-select" aria-label="Default select example">
                        <option selected>-- SELECT YOUR OPTION --</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th width="20%" scope="row">Name of your Institute</th>
                <td id="forInstituteField">
                    <?php include './includes/search_institutes.php' ?>
                </td>
                <td id="forInstituteField2" style="display:none;">
                    <input id="institute2" class="form-control" type="search" name="institute2" placeholder="Institution Name">
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <hr />
                </td>
            </tr>
            <tr>
                <th width="35%" scope="row">Are You Willing to participate in cleansing along with translation ?</th>
                <td>
                    <select name="cleansing" class="form-select" aria-label="Default select example">
                        <option selected>-- SELECT YOUR OPTION --</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <div class="alert alert-primary" role="alert">
                        <strong>Help! What is Cleansing ?</strong>
                        This is a process of correction of English transcripts to make it more accurate according to video lecture. Translators would be provided English transcripts and he has to correct it according to video lecture using his/her subject knowledge.
                    </div>
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <hr />
                </td>
            </tr>
        </tbody>
        </table>    
    </div>


    <h5 class="font-weight-bold mt-4">
        For Faculty
    </h5>

    <div class="card bg-white rounded p-2">
        <table class="table table-borderless">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td width="100%" colspan="2">
                    <hr />
                </td>
            </tr>
            <tr>
                <th width="20%" scope="row">Are you willing to be a validator also? </th>
                <td>
                    <select name="validator" class="form-select" aria-label="Default select example">
                        <option selected>-- SELECT YOUR OPTION --</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <div class="alert alert-primary" role="alert">
                        <strong>Help! What will cover in validation ?</strong> 
                        Validator needs to evaluate the transcript as well as audio file submitted by translators in terms of the language chosen for translation and the clarity of the translated contents with the original English transcript.
                    </div>
                </td>
            </tr>
            <tr>
                <td width="100%" colspan="2">
                    <hr />
                </td>
            </tr>
            <tr>
                <th width="35%" scope="row">Years of Experience</th>
                <td>
                    <select id="experience" name="experience" class="form-select" aria-label="Default select example">
                        <option value="" selected>-- SELECT YOUR YEAR OF EXPERIENCE --</option>
                        <option value="0-5">0-5</option>
                        <option value="6-10">6-10</option>
                        <option value="More than 10">More than 10</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th width="35%" scope="row">Nearest Domain: (Department)</th>
                <td>
                    <select class="form-select" name="domain" id="domain">
                        <option value="">- Select Your Domain -</option>
                        <option value="BASIC SCIENCE (Physics)">BASIC SCIENCE (Physics)</option>
                        <option value="BASIC SCIENCE (Maths)">BASIC SCIENCE (Maths)</option>
                        <option value="BASIC SCIENCE (Chemistry)">BASIC SCIENCE (Chemistry)</option>
                        <option value="ELECTRONICS AND COMMUNICATION ENGINEERING">ELECTRONICS AND COMMUNICATION ENGINEERING</option>
                        <option value="MECHANICAL ENGINEERING">MECHANICAL ENGINEERING</option>
                        <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
                        <option value="ELECTRICAL ENGINEERING">ELECTRICAL ENGINEERING</option>
                        <option value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
                        <option value="COMPUTER SCIENCE AND ENGINEERING">COMPUTER SCIENCE AND ENGINEERING</option>
                        <option value="METALLURGICAL ENGINEERING AND MATERIAL SCIENCE">METALLURGICAL ENGINEERING AND MATERIAL SCIENCE</option>
                        <option value="CHEMICAL ENGINEERING">CHEMICAL ENGINEERING</option>
                        <option value="HUMANITIES">HUMANITIES</option>
                        <option value="OTHER">OTHER</option>
                    </select>
                </td>
            </tr>
            <!-- <tr>
                <th width="35%" scope="row">Select Your Stream</th>
                <td>
                    <select class="form-select" name="stream" id="stream"></select>
                </td>
            </tr>
            <tr>
                <th width="35%" scope="row">Select Your Course</th>
                <td>
                    <select class="form-select" name="course2" id="course2"></select>
                </td>
            </tr> -->
            <tr>
                <th width="35%" scope="row"></th>
                <td>
                    <button type="button" id="subBtnFaculty" name="subBtnFaculty" class="btn btn-lg btn-block btn-success">Submit</button>
                </td>
            </tr>
        </tbody>
        </table>    
    </form>
    </div>


</section>

<?php include './includes/footer.inc.php' ?>