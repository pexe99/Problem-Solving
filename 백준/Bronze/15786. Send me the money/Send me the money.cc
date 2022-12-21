#include <iostream>
#include <string>
using namespace std;

int N, M;
string original, postit;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M >> original;

	while (M--) {
		cin >> postit;
		int originalIndex = 0;
		for (int i = 0; i < postit.length(); i++) {
			if (originalIndex == N) break;
			if (original[originalIndex] == postit[i]) originalIndex++;
		}

		if (originalIndex == N) cout << "true\n";
		else cout << "false\n";
	}

	return 0;
}