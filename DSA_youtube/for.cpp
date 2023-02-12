


#include<iostream>
using namespace std;


int main()
{
  int n=10;
  
 int i = 1;

// for(; i<=n ; ){
//   cout << i<< endl;
// }

for(int i=0; i<= 15 ; i+=2){
  cout << i<< endl;
  
  if(i&1)
    continue;

    cout << "heyey";
  i++;
}
   
}


