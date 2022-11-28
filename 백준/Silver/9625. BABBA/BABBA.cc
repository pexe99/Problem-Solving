#include <iostream>
#include <vector>
using namespace std;

int N;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	vector<pair<int, int>> AB(46, { 0, 0 });

	AB[0] = { 1, 0 };
	AB[1] = { 0 ,1 };
	AB[2] = { 1, 1 };

	for (int i = 3; i <= 45; i++) {
		AB[i] = { AB[i - 1].first + AB[i - 2].first, AB[i - 1].second + AB[i - 2].second };
	}

	cin >> N;
	cout << AB[N].first << " " << AB[N].second << "\n";

	return 0;
}