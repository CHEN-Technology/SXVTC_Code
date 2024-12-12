internal class Program
{
    private static void Main(string[] args)
    {
        int[] intArr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int max = intArr[0];
        int min = intArr[0];
        int sum = 0;
        for(int i = 0; i < intArr.Length; i++){
            if(intArr[i] > max){
                max = intArr[i];
            }
            if(intArr[i] < min){
                min = intArr[i];
            }
            sum += intArr[i];
        }
        float average = (float)sum/intArr.Length;
        Console.WriteLine("最大值: {0}, 最小值：{1}, 总和：{2}, 平均值：{3}", max , min, sum, average);
    }
}