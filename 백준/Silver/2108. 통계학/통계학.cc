#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
#include <cmath>
using namespace std;

int N, input;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	double sum = 0;
	vector<int> sorted;
	map<int, int> counter;
	for (int i = 0; i < N; i++) {
		cin >> input;
		sum += input;
		sorted.push_back(input);
		if (counter[input]) counter[input]++;
		else counter[input] = 1;
	}
	
	map<int, set<int>> sortByCounter;
	for (auto iter : counter) {
		sortByCounter[iter.second].insert(iter.first);
	}

	sort(sorted.begin(), sorted.end());

	if (round(sum / N) == -0) cout << 0 << "\n";
	else cout << round(sum / N) << "\n";

	if (N % 2 == 1) cout << sorted[N / 2] << "\n";
	else cout << (sorted[N / 2] + sorted[N / 2 + 1]) / 2 << "\n";

	auto iter = (*(--sortByCounter.end())).second;
	if (iter.size() == 1) cout << *iter.begin() << "\n";
	else cout << *++iter.begin() << "\n";

	cout << sorted.back() - sorted.front() << "\n";

	return 0;
}