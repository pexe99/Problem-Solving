#include <iostream>
#include <queue>
using namespace std;

int N, input;
priority_queue<int> plusQ;
priority_queue<int> minusQ;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	while (N--) {
		cin >> input;
		if (input == 0) {
			if (plusQ.empty() && minusQ.empty()) cout << 0 << "\n";
			else if (plusQ.empty() && !minusQ.empty()) {
				cout << minusQ.top() << "\n";
				minusQ.pop();
			}
			else if (!plusQ.empty() && minusQ.empty()) {
				cout << plusQ.top() * -1 << "\n";
				plusQ.pop();
			}
			else {
				if (plusQ.top() <= minusQ.top()) {
					cout << minusQ.top() << "\n"; 
					minusQ.pop();
				}	
				else {
					cout << plusQ.top() * -1 << "\n";
					plusQ.pop();
				}
			}
		}
		else {
			if (input > 0) plusQ.push(input * -1);
			else minusQ.push(input);
		}
	}

	return 0;
}