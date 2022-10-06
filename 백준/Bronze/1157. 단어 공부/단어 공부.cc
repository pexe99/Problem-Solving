#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
// 32

int main() {
	string input;
	cin >> input;
	vector<int> alpha(26, 0);

	for (int i = 0; i < input.length(); i++) {
		if ('A' <= input[i] && input[i] <= 'Z') {
			alpha[input[i] - 'A']++;
		}
		else {
			alpha[input[i] - 'a']++;
		}
	}

	int counter = 0;
	int max = 0;
	int index = 0;
	for (int i = 0; i < 26; i++) {
		if (max < alpha[i]) {
			max = alpha[i];
			index = i;
			counter = 0;
		}
		else if (max != 0 && max == alpha[i]) {
			counter++;
		}
	}

	if (counter != 0) {
		cout << "?\n";
	}
	else {
		cout << char(index + 'A') << "\n";
	}
}