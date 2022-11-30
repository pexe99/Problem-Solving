#include <iostream>
#include <vector>
using namespace std;

int T, N;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	vector<pair<int, int>> AB(41, { 0, 0 });

	AB[0] = { 1, 0 };
	AB[1] = { 0 ,1 };

	for (int i = 2; i <= 40; i++) {
		AB[i] = { AB[i - 1].first + AB[i - 2].first, AB[i - 1].second + AB[i - 2].second };
	}

	cin >> T;
	while (T--) {
		cin >> N;
		cout << AB[N].first << " " << AB[N].second << "\n";
	}

	return 0;
}