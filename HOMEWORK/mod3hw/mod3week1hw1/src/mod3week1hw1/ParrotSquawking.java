package mod3week1hw1;

public class ParrotSquawking {

		public static boolean getup(boolean squawking, int hourOfDay) {
			if (hourOfDay < 0 || hourOfDay > 23) {
				return false;
			}

			if (squawking && (hourOfDay < 8 || hourOfDay > 22)) {
				return true;
			}

			return false;
		}

		public static void main(String[] args) {
			System.out.println("Parrot squawking: " + getup(false, 1));
		}

}

