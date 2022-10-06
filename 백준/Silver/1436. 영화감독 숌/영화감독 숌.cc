#include <iostream>
#include <string>
using namespace std;

int main() {
	int N;
	cin >> N;

	string result = "666";
	int counter = 0;
	while (counter != N) {
		for (int i = 0; i < result.length(); i++) {
			if (result.length() - i >= 3 && result[i] == '6' && result[i + 1] == '6' && result[i + 2] == '6') {
					counter++;
					break;
			}
		}
		result = to_string(stoi(result) + 1);
	}
	cout << stoi(result) - 1 << "\n";
}