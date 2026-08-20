import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class ResultServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                           HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String regno = request.getParameter("regno");

        try {

            int m1 = Integer.parseInt(request.getParameter("sub1"));
            int m2 = Integer.parseInt(request.getParameter("sub2"));
            int m3 = Integer.parseInt(request.getParameter("sub3"));
            int m4 = Integer.parseInt(request.getParameter("sub4"));
            int m5 = Integer.parseInt(request.getParameter("sub5"));

            // Validate marks
            if (m1 < 0 || m1 > 100 ||
                m2 < 0 || m2 > 100 ||
                m3 < 0 || m3 > 100 ||
                m4 < 0 || m4 > 100 ||
                m5 < 0 || m5 > 100) {

                out.println("<html><body>");
                out.println("<h2>Invalid Marks</h2>");
                out.println("<p>Each mark must be between 0 and 100.</p>");
                out.println("</body></html>");
                return;
            }

            // Calculate total
            int total = m1 + m2 + m3 + m4 + m5;

            // Calculate average
            double average = total / 5.0;

            // Highest
            int highest = Math.max(
                    Math.max(m1, m2),
                    Math.max(Math.max(m3, m4), m5)
            );

            // Lowest
            int lowest = Math.min(
                    Math.min(m1, m2),
                    Math.min(Math.min(m3, m4), m5)
            );

            // Grade
            String grade;

            if (average >= 90) {
                grade = "A+";
            } else if (average >= 80) {
                grade = "A";
            } else if (average >= 70) {
                grade = "B";
            } else if (average >= 60) {
                grade = "C";
            } else if (average >= 50) {
                grade = "D";
            } else {
                grade = "F";
            }

            // Pass or Fail
            boolean pass =
                    m1 >= 40 &&
                    m2 >= 40 &&
                    m3 >= 40 &&
                    m4 >= 40 &&
                    m5 >= 40;

            String result;

            if (pass) {
                result = "PASS";
            } else {
                result = "FAIL";
            }

            // Display result
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Student Result</title>");

            out.println("<style>");

            out.println("body {");
            out.println("font-family: Arial;");
            out.println("background: linear-gradient(135deg,#667eea,#764ba2);");
            out.println("padding: 40px;");
            out.println("}");

            out.println(".box {");
            out.println("background: white;");
            out.println("width: 700px;");
            out.println("margin: auto;");
            out.println("padding: 35px;");
            out.println("border-radius: 20px;");
            out.println("box-shadow: 0 10px 30px rgba(0,0,0,0.25);");
            out.println("}");

            out.println("h1 {");
            out.println("text-align: center;");
            out.println("color: #4f46e5;");
            out.println("}");

            out.println("table {");
            out.println("width: 100%;");
            out.println("border-collapse: collapse;");
            out.println("margin-top: 25px;");
            out.println("}");

            out.println("th, td {");
            out.println("border: 1px solid #ddd;");
            out.println("padding: 12px;");
            out.println("text-align: center;");
            out.println("}");

            out.println("th {");
            out.println("background: #4f46e5;");
            out.println("color: white;");
            out.println("}");

            out.println(".pass {");
            out.println("color: green;");
            out.println("font-weight: bold;");
            out.println("}");

            out.println(".fail {");
            out.println("color: red;");
            out.println("font-weight: bold;");
            out.println("}");

            out.println("</style>");

            out.println("</head>");

            out.println("<body>");

            out.println("<div class='box'>");

            out.println("<h1>Student Result</h1>");

            out.println("<table>");

            out.println("<tr>");
            out.println("<th>Student Name</th>");
            out.println("<td>" + name + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Register Number</th>");
            out.println("<td>" + regno + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Subject 1</th>");
            out.println("<td>" + m1 + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Subject 2</th>");
            out.println("<td>" + m2 + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Subject 3</th>");
            out.println("<td>" + m3 + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Subject 4</th>");
            out.println("<td>" + m4 + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Subject 5</th>");
            out.println("<td>" + m5 + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Total</th>");
            out.println("<td>" + total + " / 500</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Average</th>");
            out.println("<td>" + average + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Highest Mark</th>");
            out.println("<td>" + highest + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Lowest Mark</th>");
            out.println("<td>" + lowest + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Grade</th>");
            out.println("<td>" + grade + "</td>");
            out.println("</tr>");

            out.println("<tr>");
            out.println("<th>Result</th>");

            if (pass) {
                out.println("<td class='pass'>" + result + "</td>");
            } else {
                out.println("<td class='fail'>" + result + "</td>");
            }

            out.println("</tr>");

            out.println("</table>");

            out.println("</div>");

            out.println("</body>");
            out.println("</html>");

        } catch (NumberFormatException e) {

            out.println("<html>");
            out.println("<body style='font-family:Arial;text-align:center;'>");
            out.println("<h2>Invalid Input</h2>");
            out.println("<p>Please enter numbers only for marks.</p>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}