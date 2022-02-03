#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int guess(int secretNumber) {
  int number = 0, counter = 0;

  do {

    printf("===Difficult===\n");
    printf("1. Between 1 and 100\n");
    printf("2. Between 1 and 1000\n");
    printf("3. Between 1 and 10000\n");
    scanf("%d", &difficult);
    
    printf("What's the secret number ?\n");
    scanf("%d", &number);

    if (number < secretNumber || number > secretNumber)
      counter++;
    else
      printf("You've found with %d step.\n", counter);

    if (number < secretNumber)
     printf("More !\n");
    else if (number > secretNumber)
     printf("Less !\n");
    else
     printf("Congrats.\n");
  } while(number != secretNumber);
  return counter;
}

int main(int argc, char const *argv[]) {
  int secretNumber = 0, counter = 0, continueGame = 0, menu = 0, difficult = 0;
  int MAX = 100, MIN = 1;


  do {
    srand(time(NULL));
    secretNumber = (rand() % (MAX - MIN + 1)) + MIN;

    printf("===Menu===\n");
    printf("1. One player\n");
    printf("2. Two players\n");
    scanf("%d", &menu);

    switch (menu) {
      case 1:
        counter = guess(secretNumber);
        break;

      case 2:
        printf("Enter your secret number : ");
        scanf("%d", &secretNumber);
        counter = guess(secretNumber);
        break;
      default:
        break;
    }
  } while(menu != 1 && menu != 2);
  return 0;
}
