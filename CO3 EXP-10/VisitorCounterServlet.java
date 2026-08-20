import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/visitor")
public class VisitorCounterServlet extends HttpServlet {

    private static int count = 0;

    protected synchronized void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        count++;

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>Visitor Counter</title></head>");
        out.println("<body style='text-align:center;font-family:Arial;'>");
        out.println("<h1>Thread-Safe Visitor Counter</h1>");
        out.println("<h2>Total Visitors: " + count + "</h2>");
        out.println("<p>Visitor count updated successfully.</p>");
        out.println("</body>");
        out.println("</html>");
    }
}