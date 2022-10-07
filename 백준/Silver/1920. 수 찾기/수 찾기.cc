#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int N, M;
	cin >> N;

	vector<int> v;
	for (int i = 0; i < N; i++) {
		int input;
		cin >> input;
		v.push_back(input);
	}

	sort(v.begin(), v.end());

	cin >> M;

	while (M--) {
		int result = 0;
		int input;
		cin >> input;
		int low = 0;
		int high = v.size() - 1;
		while (low <= high) {
			int mid = (low + high) / 2;
			if (v[mid] == input) {
				result = 1;
				break;
			}
			else if (v[mid] < input) {
				low = mid + 1;
			}
			else {
				high = mid - 1;
			}
		}
		cout << result << "\n";
	}
}