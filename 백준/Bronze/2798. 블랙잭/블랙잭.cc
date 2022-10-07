#include <iostream>
#include <vector>
using namespace std;

int main() {
	int N, M, input;
	cin >> N >> M;

	vector<int> card;
	for (int i = 0; i < N; i++) {
		cin >> input;
		card.push_back(input);
	}

	int max = 0;
	for (int i = 0; i < N; i++) {
		for (int j = i + 1; j < N; j++) {
			for (int k = j + 1; k < N; k++) {
				int sum = card[i] + card[j] + card[k];
				if (sum <= M && max < sum) max = sum;
			}
		}
	}
	cout << max << "\n";
}