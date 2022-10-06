#include <iostream>
#include <string>
using namespace std;

string input;

int main() {
	int T;
	cin >> T;

	while (T--) {
		int repeat;
		cin >> repeat >> input;
		string result = "";

		for (int i = 0; i < input.length(); i++) {
			for (int j = 0; j < repeat; j++) {
				result += input[i];
			}
		}

		cout << result << "\n";
	}
}