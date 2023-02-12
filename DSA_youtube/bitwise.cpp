// And - &
// OR -|
// NOT !
// XOR - ~

#include<iostream>
using namespace std;


int main()
{
    int a =4;
    int b=6;
    
    cout << "And " << (a&b)<< endl;
    cout << "OR " << (a|b)<< endl;
    cout << "NOT " << (~a)<< endl;
    cout << "Xor " << (a^b)<< endl;


    cout << (17>>1)<<  endl;
    cout << (17>>2)<<  endl;
    cout << (19<<1)<<  endl;
    cout << (19<<2)<<  endl; 
}