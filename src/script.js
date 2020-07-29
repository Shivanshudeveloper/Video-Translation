$(document).ready(function(){
    console.log("READY");
    
	// =========================================================
	$("#translation_work" ).change(function() {
		var value = $("#translation_work").val();
		if (value == "YES") {
            $("#msg").html(`
            <div class="alert alert-info" role="alert">
                <h5>
                Thank you very much for showing interest in translating video lectures in Indian languages. This translation would be of great help to the nation. 
                <br />
                Please go ahead with the selection of the language and course. 
                </h5>
            </div>
            `);
            $("#registerBtn").prop('disabled', false);
            $("#section2Btn").prop('hidden', false);
		} else if (value == "NO") {
			$("#msg").html(`
            <div class="alert alert-danger" role="alert">
                <b>Thank you….!</b> <br />
                Please look at the benefits of being a translator
                <br />
                Think twice before you say “No”.
                <br />
                If you are conversant with any professional course(s) and proficiency in at least one local language, you may think of applying here as a translator.
                <br />
                More information can be seen in the <a href="./FAQ.php" target="_blank">FAQs</a>. Click here to see more information.
            </div>
            <a class="btn btn-primary" href="register.php">Back to Home Page</a>

            <div style="text-align:left">
            <br />
            <br /><br />
            <h4>INDIAN LANGUAGES FOR TRANSLATION:</h4>
            <h5 class="text-dark">Q 1.Who is eligible for translation of Swayam Courses in Indian languages?</h5>
            <h5 class="text-dark">A 1.Any Faculty / Final Year or Pre-final Year Student / Researcher / Educationist / Individual having exposure / Professional translators having domain knowledge of concerned course are welcome.</h5>

            <br />
                <br />
                <hr />

                <h5 class="text-dark">What are the Indian languages to be translated in ?</h5>
                <h5 class="text-dark">Following are Indian Languages being considered as of now.</h5>
                <p class="text-dark">
                    a. Hindi <br />
                    b. Gujarati<br />
                    c. Marathi<br />
                    d. Kannada<br />
                    e. Tamil<br />
                    f. Telugu<br />
                    g. Bengali<br />
                    h. Malayalam<br />
                </p>

                <br />
                <hr />

                <h5 class="text-dark">Q 3.What is to be translated ?</h5>
                <h5 class="text-dark">A 3.SWAYAM / NPTEL online courses are to be provided with sub-titles on online videos courses. For this purpose, the english transcripts of these lectures are to be translated into 8 Indian languages. </h5>

                <hr />

                <br />

                <h5 class="text-dark">Q 4.What is the duration of each course?</h5>
                <h5 class="text-dark">A 4.40 Hours Approximately. Only a smaller and handlable part of the course is allocated at a time for translation. See relevant FAQ. </h5>
                <hr />

                <br />

                <h5 class="text-dark">Q 5.Am I supposed to translate the entire course?</h5>
                <h5 class="text-dark">A 5.No, initially 5 hours course material is allocated for translation to one individual. Based on timely completion and quality of translation, more work can be assigned. </h5>

                <hr />

                <br />

                <h5 class="text-dark">Q 6.Approximately, how much time it takes to translate the course for one-hour material?</h5>
                <h5 class="text-dark">A 6.It may take as much as 10 Hours per video of 60 minute, but this may vary from person to person.</h5>
                <hr />

                <br />

                <h6 class="text-dark">INPUT FOR THE TRANSLATION</h6>
                <h5 class="text-dark">Q 7.Whether original script in English will be made available to translator?</h5>
                <h5 class="text-dark">A 7.Yes. Each selected translator shall be allocated a course and an english transcript.</h5>

                <hr />

                <br />

                <h6 class="text-dark">SELCTION FO TRASLATOR:</h6>
                <h5 class="text-dark">Q 8.What is the selection criteria for being a translator?</h5>
                <h5 class="text-dark">A 8.Translator shall be selected based on the quality and timely submission of 1 page sample transcript.</h5>

                <br />

                <hr />

                <h5 class="text-dark">Q 9.When is this sample transcript needs to be submitted ?</h5>
                <h5 class="text-dark">A 9.After you show your willingness, we will get back to you with a request for sample transcript. We will provide you a page to be translated as sample.</h5>
                <hr />

                <br />
                <h5 class="text-dark">Q 10.Does it require special expertise as translator ?</h5>
                <h5 class="text-dark">A 10.Will help completing the work faster. But not essential.  </h5>

                <hr />

                <br />
                <h5 class="text-dark">Q 11.What is the process of acceptance of translated material / Script?</h5>
                <h5 class="text-dark">A 11.The transcript in local language shall be verified by some expert before putting onto the video lectures.</h5>

                <hr />

                <br />
                <h4>WHAT IS TO BE SUBMITTED:</h4>
                <h5 class="text-dark">Q 12.Whether the script is also to be dubbed / converted to audio file for submission ?</h5>
                <h5 class="text-dark">A 12.It is NOT dubbing in the sense as it is done in films. But yes, an audio file of the Indian transcript is required to be submitted.</h5>
                <hr />

                <br />
                <h4>TECHNICAL TERMS:</h4>
                <h5 class="text-dark">Q 13.Can technical terms be retained in English Languages?</h5>
                <h5 class="text-dark">A 13.Yes, some special technical terms, Equations, variables, labels etc. may be retained in English.</h5>
                <hr />

                <br />
                <h4>TECHNICAL TERMS:</h4>
                <h5 class="text-dark">Q 14.Can numerals and formulas be used in English Language?</h5>
                <h5 class="text-dark">A 14.Yes, in fact, preferred.</h5>
                <hr />

                <br />
                <h4>BENEFITS TO THE TRANSLATORS:</h4>
                <h5 class="text-dark">Q 15.Is there any honorarium provided to the translators ?</h5>
                <h5 class="text-dark">A 15.Yes, an honorarium of Rs. 2500/- is currently being provided for translation of one hour of course.</h5>

                <hr />

                <br />
                <h5 class="text-dark">Q 16.What are the other benefits to the translators ?</h5>
                <h5 class="text-dark">A 16.We will</h5>
                <p class="text-dark">
                    (a) Issue a “Certificate of Recognition” to the translator <br />
                    (b) Place the name of the translator and his / her affiliating institute on the course title as recognition.<br />
                </p>
                <hr />

                <br />
                <h5 class="text-dark">Q 17.Will some tool be made available for translating into Indian language?</h5>
                <h5 class="text-dark">A 17.A Video will be shared for getting a clarity on how to do it.</h5>
                <hr />
                <br />
                <h4>VALIDATION OF TRANSCRIPT:</h4>
                <h5 class="text-dark">Q 18.Do you also need people to validate the translated?</h5>
                <h5 class="text-dark">A 18.Yes, in fact, we need.</h5>
                <br />
                <br />
                </div>

            `);
            $("#registerBtn").prop('disabled', true);
            $("#section2Btn").prop('hidden', true);
		} 
    });


    $("#askwhatsapp" ).change(function() {
		var value = $("#askwhatsapp").val();
		if (value == "YES") {
            $("#enterwhatsapp").prop('hidden', true);
            console.log("YES");
		} else if (value == "NO") {
            $("#enterwhatsapp").prop('hidden', false);
            console.log("NO");

        } 
    });
    
    // ========================================================
    $("#course" ).change(function() {
        var value = $("#course").val();
        console.log(value);
		if (value == "Engineering & Technology") {
			$("#stream").html(`
                <option value='' selected disabled>- SELECT OPTION -</option>
                <option value='BASIC SCIENCE'>BASIC SCIENCE</option>
                <option value='ELECTRICAL ENGINEERING'>ELECTRICAL ENGINEERING</option>
                <option value='CIVIL ENGINEERING'>CIVIL ENGINEERING</option>
                <option value='COMPUTER SCIENCE AND ENGINEERING'>COMPUTER SCIENCE AND ENGINEERING</option>
                <option value='HUMANITIES'>HUMANITIES</option>
                <option value='BIOTECHNOLOGY'>BIOTECHNOLOGY</option>
                <option value='MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE'>MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE</option>
                <option value='ELECTRONICS AND COMMUNICATION ENGINEERING'>ELECTRONICS AND COMMUNICATION ENGINEERING</option>
                <option value='CHEMICAL ENGINEERING'>CHEMICAL ENGINEERING</option>
                <option value='MECHANICAL ENGINEERING'>MECHANICAL ENGINEERING</option>
			`);
		} else if (value == "Self Paced") {
			$("#stream").html(`
                <option value='Multidisciplinary'>Multidisciplinary</option>
            `);
            $("#course2").html(`
                <option value='Cancer Fundamentals'>Cancer Fundamentals</option>
                <option value='Critical Thinking'>Critical Thinking</option>
                <option value='Cultural Studies'>Cultural Studies</option>
                <option value='Designing Digital Solution'>Designing Digital Solution</option>
                <option value='Development of Assistive technology for persons with Disabilities'>Development of Assistive technology for persons with Disabilities</option>
                <option value='Environment Natural resources and Sustainable Development'>Environment Natural resources and Sustainable Development</option>
                <option value='Innovation by Design'>Innovation by Design</option>
                <option value='Mind Education'>Mind Education</option>
                <option value='Understanding Design'>Understanding Design</option>
			`);
		} else if (value == "Yoga") {
			$("#stream").html(`
                <option value='Multidisciplinary'>Multidisciplinary</option>
            `);
            $("#course2").html(`
                <option value='Introduction to Yoga and Applications of Yoga'>Introduction to Yoga and Applications of Yoga</option>
                <option value='Yoga Practices 1'>Yoga Practices 1</option>
                <option value='Yoga Practices 2'>Yoga Practices 2</option>
                <option value='Yoga Practices 3'>Yoga Practices 3</option>
			`);
		} 
    });


    $("#stream" ).change(function() {
        var value = $("#stream").val();
        var value2 = $("#course").val();

		if (value == "BASIC SCIENCE") {
			$("#course2").html(`
                <option value='INTRODUCTION TO ELECTROMAGNETIC THEORY'>INTRODUCTION TO ELECTROMAGNETIC THEORY</option>
                <option value='QUANTUM MECHANICS I'>QUANTUM MECHANICS I</option>
                <option value='INTRODUCTORY QUANTUM MECHANICS'>INTRODUCTORY QUANTUM MECHANICS</option>
                <option value='WAVES AND OSCILLATIONS'>WAVES AND OSCILLATIONS</option>
                <option value='ENGINEERING MATHEMATICS - I'>ENGINEERING MATHEMATICS - I</option>
                <option value='CHEMISTRY - I'>CHEMISTRY - I</option>
                <option value='DIFFERENTIAL EQUATIONS FOR ENGINEERS'>DIFFERENTIAL EQUATIONS FOR ENGINEERS</option>
                <option value='ENGINEERING MATHEMATICS II'>ENGINEERING MATHEMATICS II</option>
                <option value='Chemistry - II'>Chemistry - II</option>
                <option value='DISCRETE MATHEMATICS BY PROF. SAJITH GOPALAN AND PROF. BENNY GEORGE K'>DISCRETE MATHEMATICS: 106103205</option>
                <option value='DIFFERENTIAL CALCULUS IN SEVERAL VARIABLES'>DIFFERENTIAL CALCULUS IN SEVERAL VARIABLES</option>
                <option value='DISCRETE MATHEMATICS BY PROF. SUDARSHAN IYENGAR'>DISCRETE MATHEMATICS: 106106183</option>
                <option value='ENGINEERING MECHANICS BY PROF.  MANOJ HARBOLA'>ENGINEERING MECHANICS: 115104094</option>
                <option value='ENGINEERING MECHANICS BY PROF. K. RAMESH'>ENGINEERING MECHANICS: 112106286</option>
			`);
        } else if (value == "BIOTECHNOLOGY") {
			$("#course2").html(`
                <option value='BIOCHEMISTRY'>BIOCHEMISTRY</option>
                <option value='APPLIED ENVIRONMENTAL MICROBIOLOGY'>APPLIED ENVIRONMENTAL MICROBIOLOGY</option>
                <option value='GENETICS AND GENOMICS'>GENETICS AND GENOMICS</option>
                <option value='BIOPHYSICAL CHEMISTRY'>BIOPHYSICAL CHEMISTRY</option>
                <option value='MOLECULAR CELL BIOLOGY'>MOLECULAR CELL BIOLOGY</option>
                <option value='PLANT DEVELOPMENTAL BIOLOGY'>PLANT DEVELOPMENTAL BIOLOGY</option>
                <option value='BIOREACTORS'>BIOREACTORS</option>
                <option value='CELL AND MOLECULAR IMMUNOLOGY'>CELL AND MOLECULAR IMMUNOLOGY</option>
                <option value='GENETIC ENGINEERING: THEORY AND APPLICATION'>GENETIC ENGINEERING: THEORY AND APPLICATION</option>
                <option value='INTRODUCTION TO PROTEOMICS'>INTRODUCTION TO PROTEOMICS</option>
                <option value='BIOINFORMATICS: ALGORITHMS AND APPLICATIONS'>BIOINFORMATICS: ALGORITHMS AND APPLICATIONS</option>
                <option value='ANALYTICAL TECHNOLOGIES IN BIOCHEMISTRY'>ANALYTICAL TECHNOLOGIES IN BIOCHEMISTRY</option>
                <option value='PRINCIPLES OF DOWNSTREAM TECHNIQUES IN BIOPROCESS'>PRINCIPLES OF DOWNSTREAM TECHNIQUES IN BIOPROCESS</option>
                <option value='PLANT BIOTECHNOLOGY'>PLANT BIOTECHNOLOGY</option>
                <option value='SOLID & HAZARDOUS WASTE MANAGEMENT'>SOLID & HAZARDOUS WASTE MANAGEMENT</option>
                <option value='EUKARYOTIC GENE EXPRESSION: BASICS AND BENEFITS'>EUKARYOTIC GENE EXPRESSION: BASICS AND BENEFITS</option>
                <option value='COMPUTER AIDED DRUG DESIGN'>COMPUTER AIDED DRUG DESIGN</option>
                <option value='TISSUE ENGINEERING'>TISSUE ENGINEERING</option>
                <option value='BIOMEDICAL NANOTECHNOLOGY'>BIOMEDICAL NANOTECHNOLOGY</option>
			`);
		} else if (value == "CHEMICAL ENGINEERING") {
			$("#course2").html(`
                <option value='BASIC PRINCIPLES AND CALCULATIONS IN CHEMICAL ENGINEERING'>BASIC PRINCIPLES AND CALCULATIONS IN CHEMICAL ENGINEERING</option>
                <option value='TRANSPORT PHENOMENA (VIDEO)'>TRANSPORT PHENOMENA (VIDEO)</option>
                <option value='CHEMICAL ENGINEERING THERMODYNAMICS'>CHEMICAL ENGINEERING THERMODYNAMICS</option>
                <option value='MASS TRANSFER OPERATIONS- II'>MASS TRANSFER OPERATIONS- II</option>
                <option value='FLUID AND PARTICLE MECHANICS'>FLUID AND PARTICLE MECHANICS</option>
                <option value='CHEMICAL REACTION ENGINEERING-I'>CHEMICAL REACTION ENGINEERING-I</option>
                <option value='MECHANICAL UNIT OPERATIONS'>MECHANICAL UNIT OPERATIONS</option>
                <option value='CHEMICAL REACTION ENGINEERING – II'>CHEMICAL REACTION ENGINEERING – II: 103101008</option>
                <option value='CHEMICAL REACTION ENGINEERING II'>CHEMICAL REACTION ENGINEERING II: 103101141</option>
                <option value='HEAT TRANSFER BY PROF. SUNANDO DASGUPTA'>HEAT TRANSFER: 103105140</option>
                <option value='MASS TRANSFER OPERATIONS I'>MASS TRANSFER OPERATIONS I: 103103145</option>
                <option value='MASS TRANSFER OPERATIONS- I'>MASS TRANSFER OPERATIONS- I: 103103035</option>
			`);
		} else if (value == "CIVIL ENGINEERING") {
			$("#course2").html(`
                <option value='ENGINEERING GRAPHICS'>ENGINEERING GRAPHICS</option>
                <option value='ENVIRONMENTAL ENGINEERING    '>ENVIRONMENTAL ENGINEERING    </option>
                <option value='MECHANICS OF SOLIDS'>MECHANICS OF SOLIDS</option>
                <option value='FLUID MECHANICS'>FLUID MECHANICS</option>
                <option value='STRUCTURAL ANALYSIS-I'>STRUCTURAL ANALYSIS-I</option>
                <option value='SOIL MECHANICS/GEOTECHNICAL ENGINEERING I'>SOIL MECHANICS/GEOTECHNICAL ENGINEERING I</option>
                <option value='MECHANICS OF MATERIALS'>MECHANICS OF MATERIALS</option>
			`);
		} else if (value == "COMPUTER SCIENCE AND ENGINEERING") {
			$("#course2").html(`
            <option value='ANALOG ELECTRONIC CIRCUITS'>ANALOG ELECTRONIC CIRCUITS: 108105158</option>
            <option value='INTRODUCTION TO PROGRAMMING IN C'>INTRODUCTION TO PROGRAMMING IN C</option>
            <option value='PROBLEM SOLVING THROUGH PROGRAMMING IN C'>PROBLEM SOLVING THROUGH PROGRAMMING IN C</option>
            <option value='Programming in Java'>Programming in Java</option>
            <option value='ANALOG ELECTRONIC CIRCUIT'>ANALOG ELECTRONIC CIRCUIT: 108102112</option>
            <option value='DIGITAL ELECTRONIC CIRCUITS'>DIGITAL ELECTRONIC CIRCUITS</option>
            <option value='DESIGN AND ANALYSIS OF ALGORITHMS'>DESIGN AND ANALYSIS OF ALGORITHMS</option>
            <option value='DATABASE MANAGEMENT SYSTEM'>DATABASE MANAGEMENT SYSTEM</option>
            <option value='PROGRAMMING IN C++'>PROGRAMMING IN C++</option>
            <option value='COMPILER DESIGN'>COMPILER DESIGN</option>
            <option value='COMPUTER NETWORKS AND INTERNET PROTOCOL'>COMPUTER NETWORKS AND INTERNET PROTOCOL</option>
            <option value='AN INTRODUCTION TO ARTIFICIAL INTELLIGENCE'>AN INTRODUCTION TO ARTIFICIAL INTELLIGENCE</option>
            <option value='CRYPTOGRAPHY AND NETWORK SECURITY '>CRYPTOGRAPHY AND NETWORK SECURITY </option>
            <option value='INTRODUCTION TO DATA ANALYTICS'>INTRODUCTION TO DATA ANALYTICS</option>
            <option value='MACHINE LEARNING, ML'>MACHINE LEARNING, ML</option>
			`);
		} else if (value == "ELECTRICAL ENGINEERING") {
			$("#course2").html(`
                <option value='FUNDAMENTALS OF ELECTRICAL ENGINEERING'>FUNDAMENTALS OF ELECTRICAL ENGINEERING</option>
                <option value='BASIC ELECTRICAL CIRCUITS'>BASIC ELECTRICAL CIRCUITS: 117106108</option>
                <option value='BASIC ELECTRIC CIRCUITS'>BASIC ELECTRIC CIRCUITS: 108104139</option>
                <option value='ELECTRICAL MACHINES-I'>ELECTRICAL MACHINES-I</option>
                <option value='ELECTROMAGNETIC FIELDS'>ELECTROMAGNETIC FIELDS</option>
                <option value='DIGITAL CIRCUITS AND SYSTEM'>DIGITAL CIRCUITS AND SYSTEM</option>
                <option value='ELECTRICAL MACHINES II'>ELECTRICAL MACHINES II</option>
                <option value='NON CONVENTIONAL ENERGY RESOURCES'>NON CONVENTIONAL ENERGY RESOURCES</option>
                <option value='POWER SYSTEM PROTECTION'>POWER SYSTEM PROTECTION</option>
                <option value='POWER SYSTEM ANALYSIS'>POWER SYSTEM ANALYSIS</option>
			`);
		} else if (value == "ELECTRONICS AND COMMUNICATION ENGINEERING") {
			$("#course2").html(`
            <option value='BASIC ELECTRONICS BY PROF. CHITRALEKHA MAHANTA'>BASIC ELECTRONICS: 117103063</option>
            <option value='BASIC ELECTRONICS BY PROF. MAHESH B. PATIL'>BASIC ELECTRONICS: 108101091</option>
            <option value='CONTROL SYSTEMS'>CONTROL SYSTEMS</option>
            <option value='SIGNALS AND SYSTEMS'>SIGNALS AND SYSTEMS</option>
            <option value='DIGITAL SYSTEMS DESIGN'>DIGITAL SYSTEMS DESIGN</option>
            <option value='DIGITAL SIGNAL PROCESSING'>DIGITAL SIGNAL PROCESSING</option>
            <option value='CIRCUIT THEORY'>CIRCUIT THEORY</option>
            <option value='ANALOG CIRCUITS'>ANALOG CIRCUITS</option>
            <option value='FOUNDATIONS OF WAVELETS AND MULTIRATE DIGITAL SIGNAL PROCESSING'>FOUNDATIONS OF WAVELETS AND MULTIRATE DIGITAL SIGNAL PROCESSING</option>
            <option value='MICROWAVE THEORY AND TECHNIQUES'>MICROWAVE THEORY AND TECHNIQUES</option>
            <option value='INFORMATION THEORY AND CODING'>INFORMATION THEORY AND CODING</option>
            <option value='DIGITAL SPEECH PROCESSING'>DIGITAL SPEECH PROCESSING</option>
            <option value='ANTENNAS'>ANTENNAS</option>
            <option value='BIOMEDICAL SIGNAL PROCESSING'>BIOMEDICAL SIGNAL PROCESSING</option>
            <option value='WIRELESS COMMUNICATION'>WIRELESS COMMUNICATION</option>
            <option value='WIRELESS ADHOC AND SENSOR NETWORKS'>WIRELESS ADHOC AND SENSOR NETWORKS</option>
            <option value='CMOS DIGITAL VLSI DESIGN'>CMOS DIGITAL VLSI DESIGN</option>
            <option value='EMBEDDED SYSTEMS DESIGN'>EMBEDDED SYSTEMS DESIGN</option>
            <option value='Fundamentals of electronic materials and devices'>Fundamentals of electronic materials and devices</option>
            <option value='MICROPROCESSORS AND MICROCONTROLLERS'>MICROPROCESSORS AND MICROCONTROLLERS</option>
            <option value='POWER ELECTRONICS'>POWER ELECTRONICS</option>
            <option value='PRINCIPLES OF SIGNALS AND SYSTEMS'>PRINCIPLES OF SIGNALS AND SYSTEMS</option>
            <option value='TRANSMISSION LINES AND ELECTROMAGNETIC WAVES'>TRANSMISSION LINES AND ELECTROMAGNETIC WAVES</option>
			`);
		} else if (value == "HUMANITIES") {
			$("#course2").html(`
            <option value='TECHNICAL ENGLISH FOR ENGINEERS'>TECHNICAL ENGLISH FOR ENGINEERS</option>
            <option value='ENGLISH LANGUAGE FOR COMPETITIVE EXAMS'>ENGLISH LANGUAGE FOR COMPETITIVE EXAMS</option>
            <option value='INTRODUCTION TO PROFESSIONAL SCIENTIFIC COMMUNICATION'>INTRODUCTION TO PROFESSIONAL SCIENTIFIC COMMUNICATION</option>
            <option value='PROCESS DESIGN DECISIONS AND PROJECT ECONOMICS'>PROCESS DESIGN DECISIONS AND PROJECT ECONOMICS</option>
            <option value='ENGINEERING ECONOMETRICS'>ENGINEERING ECONOMETRICS</option>
            <option value='ORGANIZATIONAL BEHAVIOUR'>ORGANIZATIONAL BEHAVIOUR</option>
			`);
		} else if (value == "MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE") {
			$("#course2").html(`
            <option value='AN INTRODUCTION TO MATERIALS: NATURE AND PROPERTIES (PART 1: STRUCTURE OF MATERIALS)'>AN INTRODUCTION TO MATERIALS: NATURE AND PROPERTIES (PART 1: STRUCTURE OF MATERIALS)</option>
            <option value='PLASTIC WORKING OF METALLIC MATERIALS'>PLASTIC WORKING OF METALLIC MATERIALS</option>
            <option value='FUNDAMENTALS OF MATERIAL PROCESSING - I'>FUNDAMENTALS OF MATERIAL PROCESSING - I</option>
			`);
		} else if (value == "MECHANICAL ENGINEERING") {
			$("#course2").html(`
                <option value='HEAT TRANSFER BY PROF. GANESH VISWANATHAN'>HEAT TRANSFER: 103101137</option>
                <option value='ENGINEERING THERMODYNAMICS'>ENGINEERING THERMODYNAMICS</option>
                <option value='APPLIED THERMODYNAMICS FOR ENGINEERS'>APPLIED THERMODYNAMICS FOR ENGINEERS</option>
                <option value='FLUID DYNAMICS AND TURBOMACHINES'>FLUID DYNAMICS AND TURBOMACHINES</option>
                <option value='FUNDAMENTALS OF MANUFACTURING PROCESSES'>FUNDAMENTALS OF MANUFACTURING PROCESSES</option>
                <option value='KINEMATICS OF MECHANISMS AND MACHINES'>KINEMATICS OF MECHANISMS AND MACHINES</option>
                <option value='REFRIGERATION AND AIR-CONDITIONING'>REFRIGERATION AND AIR-CONDITIONING</option>
                <option value='BASICS OF FINITE ELEMENT ANALYSIS-I'>BASICS OF FINITE ELEMENT ANALYSIS-I</option>
                <option value='PROBABILITY AND STATISTICS'>PROBABILITY AND STATISTICS</option>
                <option value='STRENGTH OF MATERIALS'>STRENGTH OF MATERIALS</option>
			`);
		} else if (value == "MECHANICAL ENGINEERING") {
			$("#course2").html(`
                <option value='HEAT TRANSFER BY PROF. GANESH VISWANATHAN'>HEAT TRANSFER: 103101137</option>
                <option value='ENGINEERING THERMODYNAMICS'>ENGINEERING THERMODYNAMICS</option>
                <option value='APPLIED THERMODYNAMICS FOR ENGINEERS'>APPLIED THERMODYNAMICS FOR ENGINEERS</option>
                <option value='FLUID DYNAMICS AND TURBOMACHINES'>FLUID DYNAMICS AND TURBOMACHINES</option>
                <option value='FUNDAMENTALS OF MANUFACTURING PROCESSES'>FUNDAMENTALS OF MANUFACTURING PROCESSES</option>
                <option value='KINEMATICS OF MECHANISMS AND MACHINES'>KINEMATICS OF MECHANISMS AND MACHINES</option>
                <option value='REFRIGERATION AND AIR-CONDITIONING'>REFRIGERATION AND AIR-CONDITIONING</option>
                <option value='BASICS OF FINITE ELEMENT ANALYSIS-I'>BASICS OF FINITE ELEMENT ANALYSIS-I</option>
                <option value='PROBABILITY AND STATISTICS'>PROBABILITY AND STATISTICS</option>
                <option value='STRENGTH OF MATERIALS'>STRENGTH OF MATERIALS</option>
			`);
		}
        
    });
    
    
    


});