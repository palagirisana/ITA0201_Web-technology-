<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="UTF-8"/>

<xsl:template match="/">

<html>
<head>
    <title>Student Information System</title>

    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #141e30, #243b55, #6a11cb);
        }

        .header {
            text-align: center;
            color: white;
            padding: 40px 20px;
        }

        .header h1 {
            margin: 0;
            font-size: 40px;
        }

        .header p {
            font-size: 18px;
        }

        .container {
            width: 85%;
            margin: 0 auto 50px auto;
            background-color: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        h2 {
            text-align: center;
            color: #243b55;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
        }

        th {
            background-color: #5b4bc4;
            color: white;
            padding: 15px;
        }

        td {
            padding: 15px;
            text-align: center;
            border-bottom: 1px solid #dddddd;
        }

        tr:hover {
            background-color: #f0edff;
        }

        .button-area {
            text-align: center;
            margin-top: 30px;
        }

        button {
            padding: 14px 30px;
            background-color: #5b4bc4;
            color: white;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #243b55;
        }

        #message {
            display: none;
            margin: 20px auto;
            padding: 15px;
            width: 60%;
            text-align: center;
            background-color: #e8f5e9;
            color: green;
            border-radius: 10px;
            font-weight: bold;
        }

        .footer {
            text-align: center;
            color: white;
            padding: 20px;
        }
    </style>

    <script type="text/javascript">
        function showMessage() {
            var message = document.getElementById("message");
            message.style.display = "block";
            message.innerHTML = "Student records loaded successfully!";
        }
    </script>

</head>

<body>

    <div class="header">
        <h1>Student Information System</h1>
        <p>XML Student Data Management</p>
    </div>

    <div class="container">

        <h2>Student Records</h2>

        <table>
            <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Department</th>
                <th>Year</th>
                <th>Email</th>
                <th>Mobile Number</th>
            </tr>

            <xsl:for-each select="students/student">
                <tr>
                    <td>
                        <xsl:value-of select="rollnumber"/>
                    </td>

                    <td>
                        <xsl:value-of select="name"/>
                    </td>

                    <td>
                        <xsl:value-of select="department"/>
                    </td>

                    <td>
                        <xsl:value-of select="year"/>
                    </td>

                    <td>
                        <xsl:value-of select="email"/>
                    </td>

                    <td>
                        <xsl:value-of select="mobile"/>
                    </td>
                </tr>
            </xsl:for-each>

        </table>

        <div class="button-area">
            <button type="button" onclick="showMessage()">
                Check Student Records
            </button>
        </div>

        <div id="message"></div>

    </div>

    <div class="footer">
        <p>Created using XML | XSLT | CSS | JavaScript</p>
    </div>

</body>
</html>

</xsl:template>

</xsl:stylesheet>