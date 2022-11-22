#include <iostream>
#include <set>
#include <string>
using namespace std;

int T, k, N;
string command;
multiset<int> s;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> T;
	while (T--) {
		cin >> k;
		for (int i = 0; i < k; i++) {
			cin >> command;
			if (command == "I") {
				cin >> N;
				s.insert(N);
			}
			else {
				cin >> N;
				if (!s.empty()) {
					if (N == 1) {
						s.erase(--s.end());
					}
					else {
						s.erase(s.begin());
					}
				}
			}
		}
		if (s.empty()) cout << "EMPTY\n";
		else cout << *(--s.end()) << " " << *s.begin() << "\n";
		s.clear();
	}
	
	return 0;
}