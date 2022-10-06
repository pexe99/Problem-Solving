#include <iostream>
using namespace std;

string input;

int main() {
	int A, B;
	while (true) {
		cin >> A >> B;
		if (A == 0 && B == 0) {
			return 0;
		}
		cout << A + B << "\n";
	}
}