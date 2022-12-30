#include <iostream>
#include <vector>
#include <string>
using namespace std;

int page, temp1{ -1 }, temp2{ -1 };
string input, buffer;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	while (true) {
		cin >> page;
		if (page == 0) break;
		int result = 0;
		vector<bool> isPrint(page, false);
		cin >> input;
		input += ',';
		for (int i = 0; i < input.length(); i++) {
			if (input[i] == '-') {
				temp1 = stoi(buffer);
				buffer = "";
			}
			else if (input[i] == ',') {
				temp2 = stoi(buffer);
				buffer = "";
				if (temp1 == -1) {
					if(temp2 <= page) isPrint[temp2 - 1] = true;
				}
				else if (temp1 <= temp2) {
					for (int j = temp1 - 1; j < temp2; j++) {
						if (j >= page) break;
						isPrint[j] = true;
					}
				}
				temp1 = -1;
				temp2 = -1;
			}
			else {
				buffer += input[i];
			}
		}

		for (auto iter : isPrint) {
			if (iter == true) result++;
		}

		cout << result << "\n";
	}

	return 0;
}