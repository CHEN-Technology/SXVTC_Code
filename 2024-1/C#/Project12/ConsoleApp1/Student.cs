namespace ConsoleApp1
{
    public class Student
    {
        public static string grade = "高一";
        public string name;
        public float score;

        public static string Grade { get => grade; }
        public string Name { get => name; set => name = value; }
        public float Score { get => score; set => score = value; }

        public Student()
        {
            name = "张三";
            score = 20;
        }

        public Student(string name, float score)
        {
            this.name = name;
            this.score = score;
        }
    }
}