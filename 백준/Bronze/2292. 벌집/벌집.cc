#include <iostream>
using namespace std;

int N, counter{ 1 }, current{ 0 };

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	if (N == 1) {
		cout << 1 << "\n";
	}
	else {
		N -= 1;
		while (true) {
			N -= current;
			counter++;
			current += 6;
			if (N <= current) {
				break;
			}
		}
		cout << counter << "\n";
	}
	
	return 0;
}