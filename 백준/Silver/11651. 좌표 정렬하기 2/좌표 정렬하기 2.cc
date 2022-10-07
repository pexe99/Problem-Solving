#include <iostream>
#include <set>
#include <map>
using namespace std;

int main() {
	int T;
	cin >> T;
	map<int, set<int>> s;
	for (int i = 0; i < T; i++) {
		int x, y;
		cin >> y >> x;
		s[x].insert(y);
	}

	for (auto iter : s) {
		for (auto iter2 : iter.second) {
			cout << iter2 << " " << iter.first << "\n";
		}
	}
}