#include <iostream>
#include <map>
using namespace std;

int N;
string input, name;
map<string, bool> logP;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	while (N--) {
		cin >> name >> input;
		if (input == "enter") logP[name] = true;
		else logP[name] = false;
	}

	for (auto iter = logP.rbegin(); iter != logP.rend(); iter++) {
		if ((*iter).second == true) cout << (*iter).first << "\n";
	}

	return 0;
}