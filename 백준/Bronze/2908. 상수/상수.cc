#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string input;

int main() {
	string input1, input2;
	cin >> input1 >> input2;

	string reverse1 = "", reverse2 = "";

	for (int i = 0; i < 3; i++) {
		reverse1 += input1[2 - i];
		reverse2 += input2[2 - i];
	}
	
	cout << max(stoi(reverse1), stoi(reverse2)) << "\n";
}