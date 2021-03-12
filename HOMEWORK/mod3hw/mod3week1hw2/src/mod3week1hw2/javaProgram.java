package mod3week1hw2;
import java.util.*;

public class javaProgram {

	public static void main(String[] args) {
		
			  //Copy one array list to another
			  List<String> List1 = new ArrayList<String>();
			  List1.add("1");
			  List1.add("2");
			  List1.add("3");
			  List1.add("4");
			  System.out.println("List1: " + List1);
			  List<String> List2 = new ArrayList<String>();
			  List2.add("A");
			  List2.add("B");
			  List2.add("C");
			  List2.add("D");
			  System.out.println("List2: " + List2);
			  // Copy List2 to List1
			  Collections.copy(List1, List2);
			  System.out.println("Copy List to List2,\nAfter copy:");
			  System.out.println("List1: " + List1);
			  System.out.println("List2: " + List2);
		
			  //Swap two elements in an array list
			  ArrayList<String> c1= new ArrayList<String>();
	          c1.add("Red");
	          c1.add("Green");
	          c1.add("Black");
	          c1.add("White");
	          c1.add("Pink");

	          System.out.println("Array list before Swap:");
	          for(String a: c1){
	          System.out.println(a);
	        }
	          //Swapping 1st(index 0) element with the 3rd(index 2) element
	         Collections.swap(c1, 0, 2);
	          System.out.println("Array list after swap:");
	          for(String b: c1){
	          System.out.println(b);
	         }
	          // Extract a portion of an array list
	          // Create a list and add some colors to the list
			  List<String> list_Strings = new ArrayList<String>();
			  list_Strings.add("Red");
			  list_Strings.add("Green");
			  list_Strings.add("Orange");
			  list_Strings.add("White");
			  list_Strings.add("Black");
			  System.out.println("Original list: " + list_Strings);
			  List<String> sub_List = list_Strings.subList(0, 3);
			  System.out.println("List of first three elements: " + sub_List);
			  
			  //Replace the second element of a ArrayList with the specified element.
			  ArrayList<String>  color = new ArrayList<String>();

			  color.add("Red");
			  color.add("Green");

			  System.out.println("Original array list: " + color);
			  String new_color = "White";
			  color.set(1,new_color);

			  int num=color.size();
			  System.out.println("Replace second element with 'White'."); 
			  for(int i=0;i<num;i++)
			  System.out.println(color.get(i));
			
	
			//Trim the capacity of an array list the current list size
			ArrayList<String> c2= new ArrayList<String>();
		    c2.add("Red");
		    c2.add("Green");
		    c2.add("Black");
		    c2.add("White");
		    c2.add("Pink");
		    System.out.println("Original array list: " + c2);
		    System.out.println("Let trim to size the above array: ");
		    c2.trimToSize();
		    System.out.println(c2);
		    
		    // test a hash set is empty or not.
			 // Create a empty hash set
			     HashSet<String> h_set = new HashSet();
			   // use add() method to add values in the hash set
		          h_set.add("Red");
		          h_set.add("Green");
		          h_set.add("Black");
		          h_set.add("White");
		          h_set.add("Pink");
		          h_set.add("Yellow");
		    System.out.println("Original Hash Set: " + h_set);
		    System.out.println("Checking the above array list is empty or not! "+h_set.isEmpty());
		    System.out.println("Remove all the elements from a Hash Set: ");
		    h_set.removeAll(h_set);
		    System.out.println("Hash Set after removing all the elements "+h_set);   
		    
		    
		    // to get the number of elements in a hash set
		 // Create a empty hash set
		     HashSet<String> h_set2 = new HashSet<String>();
		   // use add() method to add values in the hash set
		          h_set2.add("Red");
		          h_set2.add("Green");
		          h_set2.add("Black");
		          h_set2.add("White");
		          h_set2.add("Pink");
		          h_set2.add("Yellow");
		    System.out.println("Original Hash Set: " + h_set2);
		    System.out.println("Size of the Hash Set: " + h_set2.size());
		    
		   // to iterate through all elements in a hash list.
		    // Create a empty hash set
		     HashSet<String> h_set3 = new HashSet<String>();
		   // use add() method to add values in the hash set
		          h_set3.add("Red");
		          h_set3.add("Green");
		          h_set3.add("Black");
		          h_set3.add("White");
		          h_set3.add("Pink");
		          h_set3.add("Yellow");

		  // set Iterator 
		    Iterator<String> p = h_set3.iterator();
		  // Iterate the hash set
		   while (p.hasNext()) {
		   System.out.println(p.next());}
		   
		  // to convert a hash set to an array.
		// Create a empty hash set
		     HashSet<String> h_set4 = new HashSet<String>();
		   // use add() method to add values in the hash set
		          h_set4.add("Red");
		          h_set4.add("Green");
		          h_set4.add("Black");
		          h_set4.add("White");
		          h_set4.add("Pink");
		          h_set4.add("Yellow");
		      System.out.println("Original Hash Set: " + h_set4);
		      // Creating an Array
		      String[] new_array = new String[h_set4.size()];
		      h_set4.toArray(new_array);
		 
		     // Displaying Array elements
		     System.out.println("Array elements: ");
		      for(String element : new_array){
		        System.out.println(element);
		     }
		   
		      //to compare two sets and retain elements which are same on both sets.
		   // Create a empty hash set
		        HashSet<String> h_set5 = new HashSet<String>();
		     // use add() method to add values in the hash set
		          h_set5.add("Red");
		          h_set5.add("Green");
		          h_set5.add("Black");
		          h_set5.add("White");
		          System.out.println("First HashSet content: "+h_set5);
		          HashSet<String>h_set6 = new HashSet<String>();
		          h_set6.add("Red");
		          h_set6.add("Pink");
		          h_set6.add("Black");
		          h_set6.add("Orange");
		          System.out.println("Second HashSet content: "+h_set6);
		          h_set5.retainAll(h_set6);
		          System.out.println("HashSet content:");
		          System.out.println(h_set5);
	}
	}


