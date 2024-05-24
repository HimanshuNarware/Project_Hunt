public class Class {

   public class pen{
       int write=100;
       String name="marker";
       public void show (){
           System.out.println("the meter pen run"+write);
           System.out.println("the name of pen"+name);
       }
       pen(){
        
       }
   }
    public static void main(String[] args){
        System.out.println("anytihg");

    // Class object = new Class();
    pen object=new pen();

       System.out.println(object.write);
       object.show();
    }



}
