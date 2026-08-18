import java.io.*;
import java.time.LocalDateTime;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/welcome")
public class WelcomeServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req,
                         HttpServletResponse res)
                         throws ServletException, IOException {

        res.setContentType("text/html");

        PrintWriter out = res.getWriter();

        out.println("<h1>Welcome to Student Portal</h1>");
        out.println("<h2>Student Name: Sana Banu</h2>");
        out.println("<h2>Course: B.Tech Information Technology</h2>");
        out.println("<h2>Date & Time: " + LocalDateTime.now() + "</h2>");
    }
}