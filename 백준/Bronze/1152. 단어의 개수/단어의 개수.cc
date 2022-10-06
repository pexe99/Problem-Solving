#include <iostream>
#include <string>
using namespace std;

string input;

int main() {
	string input;
	int counter = 0;
	while (cin >> input) {
		counter++;
	}
	cout << counter << "\n";
}