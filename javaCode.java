public class javaCode {

    public static void main(String[] args){
        String str="psychology";
        // count vowels
        
        int count=0;
        for(int i=0; i<=str.length(); i++){
            if(str.charAt(i)==("a"||"e" || "i" || "o" || "u" )){
                count++;

            }
    
        }
        System.out.println(count);
    }
}