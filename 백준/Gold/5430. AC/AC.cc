#include <iostream>
#include <deque>
#include <string>
#include <algorithm>
using namespace std;

int T, N;
string command, input;
deque<int> arr;
bool isReverse = false;
bool isError = false;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> T;
	while (T--) {
		cin >> command >> N >> input;

		string digit = "";
		if (input.length() != 2) {
			for (int i = 1; i < input.length(); i++) {
				if (isdigit(input[i])) digit += input[i];
				else {
					arr.push_back(stoi(digit));
					digit = "";
				}
			}
		}

		for (int i = 0; i < command.length(); i++) {
			if (command[i] == 'R') isReverse = !isReverse;
			else {
				if (arr.empty()) {
					isError = true; break;
				}
				if (isReverse) arr.pop_back();
				else arr.pop_front();
			}
		}

		if(isError) cout << "error\n";
		else {
			cout << "[";
			if (arr.empty()) {}
			else if (arr.size() == 1) cout << arr[0];
			else if (isReverse) {
				for (int i = arr.size() - 1; i >= 1; i--) {
					cout << arr[i] << ",";
				}
				cout << arr[0];
			}
			else {
				for (int i = 0; i <= arr.size() - 2; i++) {
					cout << arr[i] << ",";
				}
				cout << arr[arr.size() - 1];
			}

			cout << "]\n";
		}

		isError = isReverse = false;
		arr.clear();
	}

	return 0;
}