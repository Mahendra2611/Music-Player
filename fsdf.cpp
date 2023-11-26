#include<iostream>
#include<string>
using namespace std;
int main(){
    string ans;
    int s = 1;
while(s <6){
    ans.push_back('0'+s);
    s++;
}
    cout<<ans<<endl;
    return 0;
}