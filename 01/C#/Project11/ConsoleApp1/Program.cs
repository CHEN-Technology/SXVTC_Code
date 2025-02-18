using System.Collections;

internal class Program
{
    private static void Main(string[] args)
    {
        ArrayList list = new ArrayList();
        list.Add("小王");
        list.Add("8:23");
        list.Add("小李");
        list.Add("8:27");
        list.Add("小张");
        list.Add("8:30");
        list.Add("小赵");
        list.Add("9:00");

        Console.WriteLine("姓名\t签到时间");
        for(int i = 0; i < list.Count; i+=2)
        {
            Console.WriteLine(list[i] + "\t" + list[i+1]);
        }
    }
}