#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N, x;
vector<int> LIS;
vector<pair<int, int>> index;
vector<int> answer;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> x;
		auto iter = lower_bound(LIS.begin(), LIS.end(), x);
		if (iter == LIS.end()) {
			LIS.push_back(x);
			index.push_back({ x, LIS.size() - 1 });
		}
		else {
			*iter = x;
			index.push_back({ x, distance(LIS.begin(), iter)});
		}
	}
	cout << LIS.size() << "\n";
	int current = LIS.size() - 1;

	for (auto i = index.rbegin(); i != index.rend(); i++) {
		if (current == -1) break;
		if (current == (*i).second) {
			answer.push_back((*i).first);
			current--;
		}
	}
	for (auto i = answer.rbegin(); i != answer.rend(); i++) {
		cout << *i << " ";
	}
	cout << "\n";

	return 0;
}