using ConsoleApp1;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("===无参构造方法===");
        Student student1 = new Student();
        Console.WriteLine(Student.grade);
        student1.Name = "张三";
        student1.Score = 90;
        Console.WriteLine(student1.Name);
        Console.WriteLine(student1.Score);
        Console.WriteLine("====接收2个参数的构造方法===");
        Student student2 = new Student("李四", 50);
        Console.WriteLine(Student.grade);
        Console.WriteLine(student2.Name);
        Console.WriteLine(student2.Score);
    }
}