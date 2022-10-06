#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
	string input;
	cin >> input;
	vector<int> alpha(26, -1);
	for (int i = 0; i < input.length(); i++) {
		if (alpha[input[i] - 'a'] == -1) {
			alpha[input[i] - 'a'] = i;
		}
	}

	for (int i = 0; i < 26; i++) {
		cout << alpha[i] << " ";
	}
	cout << "\n";
}