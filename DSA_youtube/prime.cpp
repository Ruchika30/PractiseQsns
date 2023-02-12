

#include<iostream>
using namespace std;

int main(){
    int number;
    cout<< "enter the number to check";
    cin >> number;

    for(int i=0; i<number ;i++){
        if(number%i == 0 &&  i!=number ){
            cout << "Not prime" << endl;
            break;
        }                  
    }
    cout << "prime" << endl;
}