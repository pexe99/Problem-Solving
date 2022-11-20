#include <iostream>
#include <map>
#include <set>
#include <string>
using namespace std;

int N, M;
string input;
map<string, bool> name;
set<string> result;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;

	while (N--) {
		cin >> input;
		name[input] = true;
	}

	while (M--) {
		cin >> input;
		if (name[input]) result.insert(input);
	}

	cout << result.size() << "\n";
	for (auto iter : result) {
		cout << iter << "\n";
	}

	return 0;
}