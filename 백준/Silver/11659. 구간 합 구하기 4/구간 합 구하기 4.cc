#include <iostream>
#include <vector>
using namespace std;

int N, M, number, i, j;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;

	vector<int> result;

	while (N--) {
		cin >> number;
		if (result.size() == 0) result.push_back(number);
		else result.push_back(*(--result.end()) + number);
	}

	while (M--) {
		cin >> i >> j;
		if (i == 1) cout << result[j - 1] << "\n";
		else cout << result[j - 1] - result[i - 2] << "\n";
	}
	
	return 0;
}