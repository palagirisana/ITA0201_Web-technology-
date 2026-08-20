import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class RegistrationServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                           HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String regno = request.getParameter("regno");
        String email = request.getParameter("email");
        String department = request.getParameter("department");
        String semester = request.getParameter("semester");

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>Registration Successful</title></head>");
        out.println("<body style='font-family:Arial;text-align:center;'>");

        out.println("<h1>Registration Successful!</h1>");

        out.println("<h3>Student Details</h3>");

        out.println("<p><b>Name:</b> " + name + "</p>");
        out.println("<p><b>Register Number:</b> " + regno + "</p>");
        out.println("<p><b>Email:</b> " + email + "</p>");
        out.println("<p><b>Department:</b> " + department + "</p>");
        out.println("<p><b>Semester:</b> " + semester + "</p>");

        out.println("</body>");
        out.println("</html>");
    }
}