#include <iostream>
#include <vector>
#include <string>
using namespace std;

int M, X;
string input;
vector<bool> S(20, false);
vector<bool> falseS(20, false);
vector<bool> trueS(20, true);

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> M;
	while (M--) {
		cin >> input;
		if (input == "add") {
			cin >> X;
			S[X - 1] = true;
		}
		else if (input == "remove") {
			cin >> X;
			S[X - 1] = false;
		}
		else if (input == "check") {
			cin >> X;
			if (S[X - 1]) cout << 1 << "\n";
			else cout << 0 << "\n";
		}
		else if (input == "toggle") {
			cin >> X;
			S[X - 1] = !S[X - 1];
		}
		else if (input == "all") S = trueS;
		else if (input == "empty") S = falseS;
		else cout << "invalid command input\n";
	}

	return 0;
}