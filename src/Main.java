import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Main {
    private static List<Student> students = new ArrayList<>();

    public static void main(String[] args) {
        try {
            // Load students from file
            students = FileHandler.loadStudents();
            System.out.println("Loaded students:");
            for (Student student : students) {
                System.out.println(student.getId() + " - " + student.getName());
            }

            // Example: Add a new student
            Student newStudent = new Student("3", "John Doe");
            students.add(newStudent);

            // Save students to file
            FileHandler.saveStudents(students);
            System.out.println("Student saved successfully!");

        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
