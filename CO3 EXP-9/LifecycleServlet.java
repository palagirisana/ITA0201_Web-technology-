import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

public class LifecycleServlet extends HttpServlet {

    private int doGetCount = 0;

    public LifecycleServlet() {
        System.out.println("Constructor executed");
    }

    @Override
    public void init() throws ServletException {
        System.out.println("init() executed");
    }

    @Override
    protected void doGet(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        doGetCount++;

        System.out.println("doGet() executed - Count: " + doGetCount);

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>Lifecycle</title></head>");
        out.println("<body style='font-family:Arial;text-align:center;'>");

        out.println("<h1>Servlet Lifecycle Demonstration</h1>");

        out.println("<h2>Constructor: Executed once</h2>");
        out.println("<h2>init(): Executed once</h2>");

        out.println("<h2>doGet(): Executed "
                + doGetCount + " time(s)</h2>");

        out.println("<p>Refresh the page to execute doGet() again.</p>");

        out.println("</body>");
        out.println("</html>");
    }

    @Override
    public void destroy() {
        System.out.println("destroy() executed");
    }
}