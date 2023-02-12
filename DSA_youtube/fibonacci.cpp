#include<iostream>
using namespace std;

    // fibonacci numbers
    // 0  1  1 2 3

int main(){
    int a=0;
    int b=1;
    int n;
    
    cout << "Give value for n" << endl;
    cin>> n;

    for(int i=0; i<=n; i++){
            int nextNumber = a+b;
        cout << (nextNumber) << endl;
            a = b;
            b = nextNumber;
    }
}